import React from 'react'
import styled from 'styled-components'

let color={
  containerBackground:"green",
  progressBackground:"yellow",
  textColor:"white",
  textGoalColor:"black"
}
class StatisticsBar extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        progress: 0
      }
      setInterval(() => {
        this.setState({
          progress: this.state.progress + (0.5)
        })
      }, 10)
    }

    //<Progress percent={this.state.progress} size='large' color='green' progress style={{margin:'10px 10px'}}/>
    render() {
      return(
        <Bar percent={this.state.progress+"%"}>
        <div className='container-data a-container'>
            <div className="progress-container">
                <span className='progress-text'>Objectif:30000DT</span>
                <div className="progress"></div>
                <div></div>
            </div>
            <div className='data'>
                <span className="span-number">40%</span>
                <span className="span-text">{"De l'objectif"}</span>
            </div>
            <div className='data'>
              <span className="span-number">30</span>
              <span className="span-text">{"Jours"}</span>
            </div>
            <div className='data'>
              <span className="span-number">400</span>
              <span className="span-text">{"Dons"}</span>
            </div>
       </div>
       </Bar>
    )
    }  
  }

  const Bar = styled.div`
    .a-container{
      margin:auto;
      max-width:1200px;
    }
    .progress-container{
      display:flex;
      background:${color.containerBackground};
      width:58%;
      height:70px;
      padding: 10px 5px;
      position:relative;
    }
    .progress{
      width:${props => props.percent};
      background:${color.progressBackground};
      height:50px;
    }
    .progress-text{
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%, -50%);
      font-weight:bold;
      font-size:25px;
      color:${color.textGoalColor};
    }
    .data{
      width:14%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      background:${color.containerBackground};
      align-items:center;
      border-left:1px solid white;
      color:${color.textColor};
    }
    .span-number{
      font-weight:bold;
      font-size:25px;
    }
    .span-text{
      font-size:13px;
    }
    .container-data{
      display:flex;
      flex-wrap:wrap;
      padding:0;
    }
    @media(max-width:767px){
      .data{
        width:33.33333333333333333333333333333%;
        padding:10px;
      }
      .progress-container{
        width:100%
      }
    }
  `

  export default StatisticsBar