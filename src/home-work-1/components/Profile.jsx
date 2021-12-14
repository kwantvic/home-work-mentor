import React, { Component } from 'react';

const setData = (data) =>
  data
    .toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);

const firstName = (name) => name.split(' ')[0];

// export default class Profile extends Component {
//   render() {
//     return (
//       <div
//         style={{
//           border: '12px solid rgb(225,225,225)',
//           borderRadius: 20,
//           margin: 50,
//           paddingLeft: 51,
//         }}>
//         <p style={{ fontSize: 50 }}>
//           Привет, <b>{firstName(this.props.name)}</b>!
//         </p>
//         <p style={{ fontSize: 35 }}>Дата регистрации: {setData(this.props.registredAt)}</p>
//       </div>
//     );
//   }
// }

export default function Profile(props) {
  return (
    <div
      style={{
        border: '12px solid rgb(225,225,225)',
        borderRadius: 20,
        margin: 50,
        paddingLeft: 51,
      }}>
      <p style={{ fontSize: 50 }}>
        Привет, <b>{firstName(props.name)}</b>!
      </p>
      <p style={{ fontSize: 35 }}>Дата регистрации: {setData(props.registredAt)}</p>
    </div>
  );
}
