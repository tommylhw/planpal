import { supabase } from "../utils/supabase";

const DBCreateUserData = async (
  auth_id: string,
  username: string,
  email: string,
  password: string
) => {
  try {
    const { data, error } = await supabase.from("sys_user").insert([
      {
        auth_id: auth_id,
        username: username,
        email: email,
        password: password,
      },
    ]);

    if (error) {
      console.warn(error);
    } else {
      return JSON.stringify(data);
    }
  } catch (error) {
    console.warn("Error on CreateUserData:", error);
  }
};

const DBFetchUserData = async (auth_id: string) => {
  try {
    const { data, error } = await supabase
      .from("sys_user")
      .select("*")
      .eq("auth_id", auth_id);

    if (error) {
      console.warn(error);
    } else {
      return JSON.stringify(data);
    }
  } catch (error) {
    console.warn("Error on FetchUserData:", error);
  }
};

const DBFetchUserID = async (auth_id: string) => {
  try {
    const { data, error }: { data: any; error: any } = await supabase
      .from("sys_user")
      .select("id")
      .eq("auth_id", auth_id);

    if (error) {
      console.warn(error);
    } else {
      // console.log("#############", data[0].id);
      return data[0].id;
    }
  } catch (error) {
    console.warn("Error on FetchUserID:", error);
  }
};

export { DBCreateUserData, DBFetchUserData, DBFetchUserID };
