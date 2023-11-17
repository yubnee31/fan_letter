import Header from "components/Header";
import Form from "components/Form";
import Fanletter from "components/Fanletter";
import React, { useState } from "react";
import styled from "styled-components";

const StP = styled.p`
  font-weight: bold;
  text-align: center;
`;

function Home({ fanLetters, setFanLetters }) {
  const [artist, setArtist] = useState("Jisoo");
  return (
    <div>
      <Header artist={artist} setArtist={setArtist} />
      <Form fanLetters={fanLetters} setFanLetters={setFanLetters} />
      <div>
        {fanLetters
          .filter((fanletter) => fanletter.writedTo === artist)
          .map((fanletter) => (
            <Fanletter fanletter={fanletter} key={fanletter.id} />
          ))}
        {fanLetters.filter((fanletter) => fanletter.writedTo === artist)
          .length === 0 ? (
          <StP>
            남겨진 팬레터가 없습니다. 첫번째 펜레터의 주인공이 돼주세요. ❤️‍🔥
          </StP>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Home;
