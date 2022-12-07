import React, { useState, useEffect } from 'react'
import MatchBox from './MatchBox'
import { VoteContainer, RoundButtonContainer, RoundButton } from './style'

const Vote = () => {
  const [matches, setMatches] = useState([])
  const [round16, setRound16] = useState([])
  const [round8, setRound8] = useState([])
  const [round4, setRound4] = useState([])
  const [round3, setRound3] = useState([])
  const [round2, setRound2] = useState([])

  const filterMatch = () => {
    if (matches.rounds) {
      let round16 = matches.rounds.filter(match => match.round === '16강')
      setRound16(round16)
      let round8 = matches.rounds.filter(match => match.round === '8강')
      setRound16(round8)
    }
  }
  // const splitData = (data) => {

  // }

  // Read (조회)
  const getRounds = () => {
    let response = fetch(`http://localhost:5050/api/rounds`)
      .then(res => res.json())
      .then(data => setMatches(data))
    // .then(data => setMatches(data))
  }
  const [rounds, setRounds] = useState([
    { round: 'roundOf16', title: '16강' },
    { round: 'roundOf8', title: '8강' },
    { round: 'roundOf4', title: '4강' },
    { round: 'roundOf3', title: '3-4위전' },
    { round: 'roundOf2', title: '결승' },
  ])

  const [checkRound, setCheckRound] = useState('roundOf16')

  useEffect(() => {
    getRounds()
    filterMatch()
  }, [])

  console.log(matches)
  console.log(round16)
  console.log(round8)

  // 하나만 조회
  // const getOneData = (route, id) => {
  //   let response = fetch(`http://localhost:5050/${route}/${id}`)
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // }

  // Update (수정)
  // const updateData = (route, item) => {
  //   let response = fetch(`http://localhost:5050/${route}/${item.id}`, {
  //     method: 'PUT', // HTTP 통신방식 : GET, POST, PUT, DELETE
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
  //       ...item,
  //     }),
  //   })
  // }

  // let allMatches = matches.map((match, idx) => (
  //   <MatchBox key={idx} data={match} />
  // ))
  // console.log(allMatches)
  // let roundof16 = data16.map((data, idx) => <MatchBox key={idx} data={data} />)
  // let roundof8 = data8.map((data, idx) => <MatchBox key={idx} data={data} />)
  // let roundof4 = data4.map((data, idx) => <MatchBox key={idx} data={data} />)
  // let roundof3 = data3.map((data, idx) => <MatchBox key={idx} data={data} />)
  // let roundof2 = data2.map((data, idx) => <MatchBox key={idx} data={data} />)

  const changeRound = e => {
    setCheckRound(e.target.value)
  }

  return (
    <VoteContainer>
      <RoundButtonContainer direction="row" spacing={2}>
        {rounds.map((round, idx) => (
          <RoundButton
            key={idx}
            variant="outlined"
            value={round.round}
            onClick={changeRound}
          >
            {round.title}
          </RoundButton>
        ))}
      </RoundButtonContainer>
      {/* {checkRound === 'roundOf16' ? roundof16 : null}
      {checkRound === 'roundOf8' ? roundof8 : null}
      {checkRound === 'roundOf4' ? roundof4 : null}
      {checkRound === 'roundOf3' ? roundof3 : null}
      {checkRound === 'roundOf2' ? roundof2 : null} */}
    </VoteContainer>
  )
}

export default Vote
