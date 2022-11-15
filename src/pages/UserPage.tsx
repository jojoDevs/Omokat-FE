import { useMemo } from "react";
import styles from "./styles/userPage.module.scss";
import UserProfile from "../components/userPage/UserProfile";
import CatGrid from "../components/userPage/CatGrid";
import useScroll from "../hooks/useScroll";
import useGetUser from "../hooks/query/useGetUser";
import default_profile from "../assets/icons/default_profile.svg";
import UserButtons from "../components/userPage/UserButtons";

const UserPage = () => {
  useScroll();
  const query = useGetUser();
  let userProfile = query.data?.data.pic;
  sessionStorage.setItem("pic", userProfile);
  userProfile = userProfile ? userProfile : default_profile;

  const { pic, name, games, win } = useMemo(
    () => ({
      pic: userProfile,
      name: query.data?.data.name,
      games: query.data?.data.games,
      win: query.data?.data.win,
    }),
    [query]
  );

  return (
    <div className={styles.userContainer}>
      <p className={styles.userTitles}>나의 프로필</p>
      <UserProfile userProfile={pic} userName={name} game={games} win={win} />
      <UserButtons />
      <p className={styles.userTitles}>
        나의 오목캣 컬렉션 <span>(1/10)</span>
      </p>
      <CatGrid />
    </div>
  );
};

export default UserPage;
