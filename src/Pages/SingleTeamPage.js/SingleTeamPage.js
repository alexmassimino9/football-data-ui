import React from "react";
import crest from "../../assets/61.png";
import { useGlobalContext } from "../../context/AppContext";
const SingleTeamPage = () => {
  // const {
  //   area,
  //   id,
  //   name,
  //   shortName,
  //   tla,
  //   crest,
  //   address,
  //   website,
  //   founded,
  //   clubColors,
  //   venue,
  //   runningCompetitions,
  //   coach,
  //   squad,
  //   lastUpdated,
  // } = getTeam;

  const { isLoading } = useGlobalContext();
  return (
    <main>
      {isLoading ? (
        <div>
          <h1>loading...</h1>
        </div>
      ) : (
        <div className="heading">
          <img src={crest} alt={"crest"} className="team-crest" />

          <h1 className="title">Chelsea FC</h1>
        </div>
      )}
    </main>
  );
};

export default SingleTeamPage;
