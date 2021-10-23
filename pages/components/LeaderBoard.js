import React from "react";

export default function LeaderBoard({ players, lastScraped }) {
  const participants = getParticipants();

  participants.forEach((participant) => {
    participant.players.forEach(player => {
      player.points += getPoints(players, player.name);
    });

    participant.players.sort(
      (player1, player2) => player2.points - player1.points
    );

    let count = 0;
    participant.players.forEach((player, index) => {
      if (index > 10) {
        player.inactive = true;
      } else {
        count += parseFloat(player.points) || 0;
      }
    });
    participant.totalPoints = count;
  });

  participants.sort((p1, p2) => p2.totalPoints - p1.totalPoints);
  if (players && players.length > 0) {
    players.sort((p1, p2) => p2.points - p1.points);
  }

  return (
    <div>
      {participants.map((participant, index) => (
        <div key={index}>
          <h3>
            {participant.name} {participant.totalPoints}
          </h3>
          <ol>
            {participant.players.map((player) => (
              <li style={{ color: player.inactive ? "grey" : "black" }}>
                {player.name} {player.points}
              </li>
            ))}
          </ol>
        </div>
      ))}

      <div>
        <h2>Actual LeaderBoard</h2>
        {players &&
          players.map((player, index) => (
            <div key={index}>
              {player.name} {player.points}
            </div>
          ))}
        <div>Last scraped: {lastScraped}</div>
      </div>
    </div>
  );
}

function getPoints(players, name) {
  if (!players) {
    return 0;
  }
  const player = players.find((x) => x?.name.toLowerCase() == name?.toLowerCase());
  return player ? parseFloat(player.points) : 0;
}

function getParticipants() {
  return [
    {
      name: "Pushpa",
      players: [
        { name: "Virat Kohli", points: 0 },
        { name: "Quinton De Kock", points: 0 },
        { name: "Chris Woakes", points: 0 },
        { name: "Mitchell Starc", points: 0 },
        { name: "Fakhar Zaman", points: 0 },
        { name: "James Neesham", points: 0 },
        { name: "Roston Chase", points: 0 },
        { name: "Lungi Ngidi", points: 0},
        { name: "Oshane Thomas", points: 0 },
        { name: "Haider Ali", points: 0 },
        { name: "Devon Conway", points: 0 },
      ],
    },
    {
      name: "Avinash",
      players: [
        { name: "KL Rahul", points: 0 },
        { name: "Jos Buttler", points: 0 },
        { name: "Ravindra Jadeja", points: 0 },
        { name: "Jonny Bairstow", points: 0 },
        { name: "Hasan Ali", points: 0 },
        { name: "Mark Wood", points: 0 },
        { name: "Lockie Ferguson", points: 0 },
        { name: "Akeal Hosein", points: 0 },
        { name: "Dushmantha Chameera", points: -120.0},
        { name: "Mushfiqur Rahim", points: -95.0 },
        { name: "Taskin Ahmed", points: -106.0 },
      ],
    },
    {
      name: "Prakash/JLV",
      players: [
        { name: "Kane Williamson", points: 0 },
        { name: "David Warner", points: 0 },
        { name: "Nicholas Pooran", points: 0 },
        { name: "Hardik Pandya", points: 0 },
        { name: "Pat Cummins", points: 0 },
        { name: "Andre Russell", points: 0 },
        { name: "Mohammed Shami", points: 0 },
        { name: "Josh Hazlewood", points: 0 },
        { name: "Shakib Al Hasan", points: 0 },
        { name: "Imad Wasim", points: 0 },
        { name: "Liton Das", points: 0 },
        { name: "Naveen-ul-Haq", points: 0 },
        { name: "Chris Jordan", points: 0 },
        { name: "Dinesh Chandimal", points: 0 },
      ],
    },
    {
      name: "Mohan/Hemanth",
      players: [
        { name: "Jasprit Bumrah", points: 0 },
        { name: "Kagiso Rabada", points: 0 },
        { name: "Dawid Malan", points: 0 },
        { name: "Mohammad Hafeez", points: 0 },
        { name: "Mitchell Marsh", points: 0 },
        { name: "Lendl Simmons", points: 0 },
        { name: "Aiden Markram", points: 0 },
        { name: "Liam Livingstone", points: 0 },
        { name: "Reeza Hendricks", points: 0 },
        { name: "Ravi Rampaul", points: 0 },
        { name: "Chris Gayle", points: 0 },
        { name: "Ish Sodhi", points: 0 },
      ],
    },
    {
      name: "Dileep/Karthik",
      players: [
        { name: "Jason Roy", points: 0 },
        { name: "Suryakumar Yadav", points: 0 },
        { name: "Ashton Agar", points: 0 },
        { name: "Evin Lewis", points: 0 },
        { name: "Mitchell Santner", points: 0 },
        { name: "Rassie van der Dussen", points: 0 },
        { name: "Obed McCoy", points: 0 },
        { name: "Shardul Thakur", points: 0 },
        { name: "Avishka Fernando", points: 0 },
        { name: "Moeen Ali", points: 0 },
        { name: "Adil Rashid", points: 0 },
        { name: "Glenn Phillips", points: 0 },
        { name: "Mohammad Nabi", points: 0 },
        { name: "Kusal Perera", points: 0 },
      ],
    },
    {
      name: "Sai Pavan",
      players: [
        { name: "Shimron Hetmyer", points: 0 },
        { name: "Rashid Khan", points: 0 },
        { name: "Babar Azam", points: 0 },
        { name: "Glenn Maxwell", points: 0 },
        { name: "Matthew Wade", points: 0 },
        { name: "Martin Guptill", points: 0 },
        { name: "Dwayne Bravo", points: 0 },
        { name: "Shoaib Malik", points: 0 },
        { name: "Rahul Chahar", points: 0 },
        { name: "Mustafizur Rahman", points: 0 },
        { name: "David Miller", points: 0 },
        { name: "David Willey", points: 0 },
      ],
    },
    {
      name: "CV",
      players: [
        { name: "Rohit Sharma", points: 0 },
        { name: "Mohammad Rizwan", points: 0 },
        { name: "Varun Chakravarthy", points: 0 },
        { name: "Trent Boult", points: 0 },
        { name: "Tabraiz Shamsi", points: 0 },
        { name: "Shaheen Afridi", points: 0 },
        { name: "Soumya Sarkar", points: 0 },
        { name: "Shadab Khan", points: 0 },
        { name: "Mohammad Shahzad", points: 0 },
        { name: "Mahmudullah", points: 0 },
        { name: "Haris Rauf", points: 0 },
        { name: "Wanindu Hasaranga", points: 0 },
        { name: "Andre Fletcher", points: 0 },
        { name: "Dwaine Pretorius", points: 0 },
      ],
    },
    {
      name: "Ramana",
      players: [
        { name: "Aaron Finch", points: 0 },
        { name: "Anrich Nortje", points: 0 },
        { name: "Tim Seifert", points: 0 },
        { name: "Steven Smith", points: 0 },
        { name: "Rishabh Pant", points: 0 },
        { name: "Eoin Morgan", points: 0 },
        { name: "Kieron Pollard", points: 0 },
        { name: "Temba Bavuma", points: 0 },
        { name: "Adam Zampa", points: 0 },
        { name: "Marcus Stoinis", points: 0 },
        { name: "Asif Ali", points: 0 },
        { name: "Bhuvneshwar Kumar", points: 0 },
        { name: "Mohammad Nawaz", points: 0 },
      ],
    },
  ];
}
