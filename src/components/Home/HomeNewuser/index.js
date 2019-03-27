import React, { Component } from 'react'

export default class HomeNewuser extends Component {
  render() {
    return (
        <div className="enjoy-home-newUser">
            <h3>新人专区</h3>
            <div className="enjoy-home-newUser-box">
                {
                    this.props.newuser.map(item=>{
                        return(
                            <div className="enjoy-home-newUser-box-ad" key={item.id}><img src={item.url}  alt=''/></div>
                        )
                    })
                }

            </div>
        </div>
    )
  }
}
