import { searchUser } from '@/services/user/search';
import { GetListUserRequest, UsersEntity } from '@/types/user';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouterUserParams } from './useRouterUser';

export default function useSearchUser() {
  const { emailParam, fullNameParam, phoneParam, roleParam, limitParam, pageParam } =
    useRouterUserParams();

  const initRequest: GetListUserRequest = {
    page: pageParam ? Number(pageParam) : 1,
    limit: limitParam ? Number(limitParam) : 20,
  };

  const [userSearchParam, setUserSearchParam] = useState(initRequest);

  useEffect(() => {
    const request: GetListUserRequest = {
      page: pageParam ? Number(pageParam) : 1,
      limit: limitParam ? Number(limitParam) : 20,
    };

    if (emailParam) {
      request.email = emailParam;
    }

    if (fullNameParam) {
      request.fullName = fullNameParam;
    }

    if (phoneParam) {
      request.phone = phoneParam;
    }

    if (roleParam) {
      request.roleId = Number(roleParam);
    }

    setUserSearchParam(request);
  }, [, emailParam, fullNameParam, phoneParam, limitParam, pageParam, roleParam]);

  const queryFn = useCallback(() => searchUser(userSearchParam), [userSearchParam]);

  const requestQuery = useQuery(['userSearch', userSearchParam], queryFn, {
    refetchOnWindowFocus: false,
    staleTime: 500,
  });

  const { data } = requestQuery;

  const userList = useMemo<UsersEntity[]>(() => {
    if (!data?.payload?.user_list) return [];

    return data?.payload?.user_list;
  }, [data?.payload?.user_list]);

  return {
    userList,
    requestQuery,
    setUserSearchParam,
  };
}
