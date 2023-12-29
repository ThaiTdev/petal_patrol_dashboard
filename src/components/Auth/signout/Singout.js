import { accountService } from "../../../_services/accountService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { usePreviousPageId } from "../../Home/components/IdContext";

const Signout = () => {
  const { id } = useParams();
  let navigate = useNavigate();
  const { setPreviousId } = usePreviousPageId();

  try {
    accountService
      .signout(id, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/AuthForm");
      });
  } catch (error) {}

  return <div></div>;
};

export default Signout;
