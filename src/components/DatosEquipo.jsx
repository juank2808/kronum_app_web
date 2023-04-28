import React from "react";
import Navbar from "./static/Navbar";
import { getDataTeam } from "../data/api";
import { useEffect, useState, useReducer } from "react";
import RadarChart from "./static/ReadarChart";

const listData = [];
const listBuild = {
    buildupplaydribblingclass: [],
    buildupplaydribbling: [],
    buildupplaypassing: [],
    buildupplaypassingclass: [],
    buildupplaypositioningclass: [],
    buildupplayspeed: [],
};
const listCreation = {
    chancecreationpassing: [],
    chancecreationpassingclass: [],
    chancecreationcrossing: [],
    chancecreationcrossingclass: [],
    chancecreationshooting: [],
    chancecreationshootingclass: [],
    chancecreationpositioningclass: [],
}
const listDefence = {
    defencepressure: [],
    defencepressureclass: [],
    defenceaggression: [],
    defenceaggressionclass: [],
    defenceteamwidth: [],
    defenceteamwidthclass: [],
    defencedefenderlineclass: [],
}
const reducer = (state, action) => {
    switch(action.type) {
        case "OK":
            return action.data;
        default:
            return state;
    }
}
const reducerData = (state, action) => {
    switch(action.type) {
        case "BUILD":
            state.buildupplaydribblingclass = action.data.map(item=> item?.buildupplaydribblingclass);
            state.buildupplaydribbling = action.data.map(item=> item?.buildupplaydribbling);
            state.buildupplaypassing = action.data.map(item=> item?.buildupplaypassing);
            state.buildupplaypassingclass = action.data.map(item=> item?.buildupplaypassingclass);
            state.buildupplaypositioningclass = action.data.map(item=> item?.buildupplaypositioningclass);
            state.buildupplayspeed = action.data.map(item=> item?.buildupplayspeed);
            state.buildupplayspeedclass = action.data.map(item=> item?.buildupplayspeedclass);
            return state;
        case "CREATION":
            state.chancecreationpassing = action.data.map(item => item?.chancecreationpassing);
            state.chancecreationpassingclass = action.data.map(item => item?.chancecreationpassingclass);
            state.chancecreationcrossing = action.data.map(item => item?.chancecreationcrossing);
            state.chancecreationcrossingclass = action.data.map(item => item?.chancecreationcrossingclass);
            state.chancecreationshooting = action.data.map(item => item?.chancecreationshooting);
            state.chancecreationshootingclass = action.data.map(item => item?.chancecreationshootingclass);
            state.chancecreationpositioningclass = action.data.map(item => item?.chancecreationpositioningclass);
            return state;
        case "DEFENSE":
            state.defencepressure = action.data.map(item => item?.defencepressure);
            state.defencepressureclass = action.data.map(item => item?.defencepressureclass);
            state.defenceaggression = action.data.map(item => item?.defenceaggression);
            state.defenceaggressionclass = action.data.map(item => item?.defenceaggressionclass);
            state.defenceteamwidth = action.data.map(item => item?.defenceteamwidth);
            state.defenceteamwidthclass = action.data.map(item => item?.defenceteamwidthclass);
            state.defencedefenderlineclass = action.data.map(item => item?.defencedefenderlineclass);
            return state;
        default:
            return state;
    }
}
const DatosEquipo = (props) => {
    const [load, setLoad] = useState(false);
    const [data, dispatch] = useReducer(reducer, listData);
    const [dataGraf, dispatchG] = useReducer(reducer, listData);
    const [buildUp, dispatchB] = useReducer(reducerData, listBuild);
    const [creation, dispatchC] = useReducer(reducerData, listCreation);
    const [defence, dispatchD] = useReducer(reducerData, listDefence);
    
    useEffect(()=>{
        getDataTeam(props.data.team_api_id).then(res=>{
            if(res.status == 200){
                dispatch({type:res.statusText, data:res.data});
                setLoad(true);
            }
        });
    },[]);
    useEffect(()=>{
    
        if(load){
            dispatchB({type:"BUILD",data:data});
            dispatchC({type:"CREATION",data:data});
            dispatchD({type:"DEFENSE",data:data});
        }
        localStorage.setItem("BUILDUP", JSON.stringify(buildUp))
        localStorage.setItem("CREATION", creation)
        localStorage.setItem("DEFENCE", defence);
        dispatchG({type:"OK",data:[{buildUp},{creation},{defence}]});
    },[load]);
    return (
        <>
            <Navbar data = {props.data}/>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>{props.data.team_long_name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                       
                        {dataGraf.map((dgf,i)=>{
                            return(<RadarChart datos={dgf} key={i}/>);
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default DatosEquipo;