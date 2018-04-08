/**
 * Created by Ashish on 4/8/18.
 */
import React, { Component } from 'react';
import Moment from 'moment';

export  default function Detail(props) {
console.log(props);
  const data = props.forecast;
  const tdStyle = {
    width:'30%',
    textAlign: 'center',
    padding:'10px'
  };

  const divStyle = {
    width:'100%'
  };

  const showData = data && data.list.map(lst =>
      <tr><td style={tdStyle}>{Moment(lst.dt_txt).format('MM/DD/YYYY hh:mm')}</td>
      <td style={tdStyle}>{lst.main.temp} &deg;C</td>
    <td style={tdStyle}>{lst.main.temp_min} &deg;C</td>
    <td style={tdStyle}>{lst.main.temp_max} &deg;C</td>
      </tr>

  );
    return (
      <tbody>
        {showData}
      </tbody>
    )
}

// module.exports = Detail;