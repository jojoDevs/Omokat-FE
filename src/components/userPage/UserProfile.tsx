import React, { useState } from "react";
import AWS from "aws-sdk";
import styles from "./styles/userProfile.module.scss";
import upload from "../../assets/icons/upload.svg";
import usePutUserPic from "../../hooks/query/usePutUserPic";

interface PropsType {
  userProfile: string;
  userName: string;
  game: number;
  win: number;
}

const UserProfile = ({ userProfile, userName, game, win }: PropsType) => {
  const [picUrl, setPicUrl] = useState<string>("");
  const region = process.env.REACT_APP_S3_REGION;
  const bucket = String(process.env.REACT_APP_S3_BUCKET);
  const accessKey = process.env.REACT_APP_S3_ACCESS_KEY_ID;
  const secretKey = process.env.REACT_APP_S3_SECRET_ACCESS_KEY;

  const query = usePutUserPic(picUrl);

  AWS.config.update({
    region: region,
    accessKeyId: accessKey,
    secretAccessKey: secretKey,
  });

  const imgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const uuid = crypto.randomUUID();
    setPicUrl(`${process.env.REACT_APP_S3_URL}profile/${uuid}.png`);

    if (e.target.files) {
      const file = e.target.files[0];

      const upload = new AWS.S3.ManagedUpload({
        params: {
          Bucket: bucket,
          Key: "profile/" + uuid + ".png",
          Body: file,
        },
      });
      const promise = upload.promise();
      promise.then(
        function () {
          sessionStorage.setItem("pic", picUrl);
          query.mutate();
        },
        function (err) {
          console.log(err);
        }
      );
    }
  };

  return (
    <div className={styles.profileBox}>
      <div className={styles.imgWrapper}>
        <img src={userProfile} className={styles.profileImg} alt="profile" />
        <label htmlFor="profilUpload">
          <div className={styles.uploadImg}>
            <img src={upload} alt="upload" />
            <p>사진 변경</p>
            <input
              type="file"
              accept="image/*"
              onChange={imgUpload}
              id="profilUpload"
              className={styles.imgInput}
            />
          </div>
        </label>
      </div>

      <div className={styles.profileTexts}>
        <p className={styles.userName}>{userName}</p>
        <p>
          총 참여 게임 수 <span>{game}</span>
        </p>
        <p>
          이긴 게임 수 <span>{win}</span>
        </p>
        <p>
          승률 <span>{game ? (win / game) * 100 : 0}%</span>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
