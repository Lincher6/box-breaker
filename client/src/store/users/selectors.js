import { createSelector } from 'reselect';

export const users = state => state.users.users;
export const totalUserCount = state => state.users.totalUserCount;
export const user = state => state.users.user;
export const page = state => state.users.page;
export const pageSize = state => state.users.pageSize;
export const search = state => state.users.search;
export const sortParams = state => state.users.sortParams;

export const tableParams = createSelector(
    page,
    pageSize,
    search,
    sortParams,
    (page, pageSize, search, sortParams) => ({
        page, pageSize, search, sortParams
    })
)