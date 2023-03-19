import { useQuery } from "@tanstack/react-query";

import { axios } from "@/lib/axios";
import { IUser } from "@/models/user";

const getUser = async (): Promise<{ status: "OK" | "ERROR"; user: IUser }> => {
  return axios.get("/api/auth/info");
};

export const useUser = (context?: {
  onSuccess?: (data: Awaited<ReturnType<typeof getUser>>) => void;
}) => {
  return useQuery(["current-user"], getUser, {
    onSuccess: context?.onSuccess,
  });
};

const getSingleUser = async (
  userId: string
): Promise<{ status: "OK" | "ERROR"; user: IUser }> => {
  const data = (await axios.get(`/api/auth/users/${userId}`)) as {
    status: "OK" | "ERROR";
    user: IUser;
  };
  return data;
};

export const useSingleUser = (context: {
  id: string;
  onSuccess?: (data: Awaited<ReturnType<typeof getUser>>) => void;
  enabled?: boolean;
}) => {
  return useQuery(["user", context.id], () => getSingleUser(context.id), {
    onSuccess: context.onSuccess,
    enabled: context.enabled || true,
  });
};
