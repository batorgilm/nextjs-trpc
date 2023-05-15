import { type NextPage } from "next";
import { api } from "@/utils/api";

const Home: NextPage = () => {
  const createUser = api.user.create.useMutation({
    onSuccess: () => {
      console.log("success");
    },
  });

  const userCreate = () => {
    createUser.mutate({
      email: "orgil05888@gmail.com",
      name: "orgil",
    });
  };

  return (
    <>
      <button onClick={userCreate}>asdasda</button>
    </>
  );
};

export default Home;
