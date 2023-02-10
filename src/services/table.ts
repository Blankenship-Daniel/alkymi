import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITable, ITableRecord } from "../types";

export const tableApi = createApi({
  reducerPath: "tableApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://private-39e16-alkymiexercise.apiary-mock.com/" }),
  endpoints: (builder) => ({
    updateTableData: builder.mutation({
      query: () => "list",
      async onQueryStarted({ selectedRecords }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          tableApi.util.updateQueryData("getTableData", undefined, (draft) => {
            draft.results = draft.results.filter((record: ITableRecord) =>
              !selectedRecords.includes(record.uuid)
            );
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    getTableData: builder.query<ITable, void>({
      query: () => "list",
      transformResponse: (response: ITable) => {
        const [fundLabel, dueDateLabel, priceLabel] = response.fields;
        response.results.forEach((record: ITableRecord) => {
          // Provides the labels directly to the data types
          record.data.fund_name = {
            ...record.data.fund_name,
            ...fundLabel,
          };
          record.data.due_date = {
            ...record.data.due_date,
            ...dueDateLabel,
          };
          record.data.price = {
            ...record.data.price,
            ...priceLabel,
          };
        });
        return response;
      },
    }),
  }),
});

export const { useGetTableDataQuery, useUpdateTableDataMutation } = tableApi;
