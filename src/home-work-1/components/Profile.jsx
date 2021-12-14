import React, { Component } from 'react';

const setData = (data) => {
  return data
    .toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    .slice(0, -3);
};

// export default class Profile extends Component {
//   render() {
//     return (
//       <div
//         style={{
//           border: '12px solid rgb(225,225,225)',
//           borderRadius: 20,
//           margin: 50,
//           paddingLeft: 50,
//         }}>
//         <p style={{ fontSize: 50 }}>
//           Привет, <b>{this.props.name}</b>!
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
        paddingLeft: 50,
      }}>
      <p style={{ fontSize: 50 }}>
        Привет, <b>{props.name}</b>!
      </p>
      <p style={{ fontSize: 35 }}>Дата регистрации: {setData(props.registredAt)}</p>
    </div>
  );
}
