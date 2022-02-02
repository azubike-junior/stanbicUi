import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Loader from "../../components/Loader";
import trash from "../../image/trash.svg";
import { createUser } from "../../services/Mutations/createUser";
import { deleteUser } from "../../services/Mutations/deleteUser";
import { getUsers } from "../../services/Mutations/getUsers";
import { RootState } from "../../store/store";
import { checkObj } from "../../utils/helper";

export interface UserProp {
  first_name: string;
  last_name: string;
  user_name: string;
  date_of_birth: string;
  dispatch?: any;
}

export default function Home() {
  const [state, setState] = useState<UserProp>({
    first_name: "",
    last_name: "",
    user_name: "",
    date_of_birth: "",
  });
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const {
    data,
    loading: loadingInput,
    error: error2,
  } = useSelector((state: RootState) => state.createUserReducer);

  const { users, loading } = useSelector(
    (state: RootState) => state.getUsersReducer
  );

  const { data: response, loading: deleteLoad } = useSelector(
    (state: RootState) => state.deleteUsersReducer
  );

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    return setState({ ...state, [e.target.name]: e.target.value });
  };

  /**
   *
   * submit handler for creating user
   * @returns
   */
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { first_name, last_name, user_name, date_of_birth } = state;
    if (!first_name || !last_name || !user_name || !date_of_birth) {
      return setError("Please fill all fields");
    }
    const data = {
      ...state,
      dispatch,
    };
    dispatch(createUser(data));
    setState({
      first_name: "",
      last_name: "",
      user_name: "",
      date_of_birth: "",
    });
    setError("");
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="w-full my-20">
      {error && <p className="text-red-500 text-center pb-4">{error}</p>}
      {error2 && (
        <p className="text-red-500 text-center pb-4">{error2?.message}</p>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-4xl px-6 md:px-0 pb-4 mx-auto md:block lg:flex justify-center space-x-4"
      >
        <div>
          <div className="pb-4 mx-auto block md:flex justify-center md:space-x-4  ">
            <Input
              name="first_name"
              label="First name"
              type="text"
              placeHolder="first name"
              value={state.first_name}
              handleChange={handleChange}
            />
            <Input
              name="last_name"
              label="Last name"
              type="text"
              placeHolder="last name"
              value={state.last_name}
              handleChange={handleChange}
            />
          </div>
          <div className="max-w-4xl block md:flex mx-auto justify-center md:space-x-4">
            <Input
              name="user_name"
              label="User name"
              type="text"
              placeHolder="user"
              value={state.user_name}
              handleChange={handleChange}
            />
            <Input
              name="date_of_birth"
              label="Date of birth"
              type="date"
              placeHolder="date of birth"
              value={state.date_of_birth}
              handleChange={handleChange}
            />
          </div>
        </div>

        <div className="mx-auto text-center">
          <Button
            child={loadingInput ? <Loader /> : "SUBMIT"}
            type="submit"
            onClick={handleSubmit}
            className="w-60 bg-darkBlue h-12 items-center justify-center mt-8 text-white rounded"
          />
        </div>
      </form>

      <div className=" max-w-4xl mt-4 mx-auto w-72 md:w-900">
        <div className="py-1 px-2.5 mx-auto md:mx-0 md:ml-14 flex bg-lightBlue md:w-900 rounded">
          Users
        </div>

        {users?.length === 0 && (
          <p className="text-center pt-4">No User has been created</p>
        )}
        {loading ? (
          <Loader />
        ) : (
          <div>
            {users?.map((item: any) => {
              const abbr = `${item.first_name[0]}` + `${item.last_name[0]}`;
              const capitalizeString = abbr?.toLocaleUpperCase();
              const data = {
                id: item._id,
                dispatch,
              };
              return (
                <div className=" block md:flex justify-between ml-14 border-b pb-2 md:w-900">
                  <div className="flex mt-5">
                    <div className="bg-darkBlue w-8 h-8 flex justify-center items-center rounded-full text-white mr-20">
                      {capitalizeString}
                    </div>
                    <div className="block md:flex justify-center items-center">
                      <p className="pr-6"> {item.user_name}</p>
                      <p>
                        {item.first_name} {item.last_name}
                      </p>
                    </div>
                  </div>

                  <div className="block md:flex justify-center items-center mt-2">
                    <p className="pr-4">{item.date_of_birth}</p>
                    <img
                      src={trash}
                      onClick={() => {
                        dispatch(deleteUser(data));
                      }}
                      className="pl-5 cursor-pointer"
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
