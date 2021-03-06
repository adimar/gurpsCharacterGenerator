import * as React from "react";
import * as redux from "redux";
import {connect} from "react-redux";
import * as _ from "lodash";
import {AggregateDataStore} from "../../datastore/aggregate-datastore";
import {SystemDataStore} from "../../datastore/system-static-store/system-data-store";
import {Textfit} from 'react-textfit';
import * as styles from "./skill-element.css";
import {removeSkill, setSkillCost} from "../../actions/skill-action-factory";
import {SystemDataAggregators} from "../../datastore/data-aggregators/system-data-aggregators";
import {InputSpinner} from "../common/input-spinner";


export interface SkillElementProps {
    skillId: string;
}


interface ConnectedState {
    name: string;
    attributeId: string,
    attributeName: string,
    difficulty: string,
    cost: number;
    relativeLevel: string;
    skillLevel: string | number;
}


interface ConnectedDispatch {
    setSkillCost: (skillCost: number, props: SkillElementProps & ConnectedState) => void;
    removeSkill: (props: SkillElementProps & ConnectedState) => void;
}


const mapStateToProps = (state: AggregateDataStore, ownProps: SkillElementProps): ConnectedState => {
    let skillId = ownProps.skillId;

    let systemSkill = SystemDataStore.skills.list[skillId];
    let aggregatedSkill = SystemDataAggregators.skills(state,skillId);
    let characterSkill = state.character.skills[skillId];

    let relativeLevel;
    if(aggregatedSkill.relativeLevel ===-999) {
        relativeLevel="";
    } else if(aggregatedSkill.relativeLevel<0) {
        relativeLevel = "  "+aggregatedSkill.relativeLevel;
    }
    else {
        relativeLevel = "+"+aggregatedSkill.relativeLevel;
    }

    return {
        name: systemSkill.name,
        relativeLevel: relativeLevel,
        cost: characterSkill.skillCost,
        attributeId: systemSkill.attributeId,
        attributeName: SystemDataStore.attributes[systemSkill.attributeId].name,
        difficulty: systemSkill.difficulty,
        skillLevel: aggregatedSkill.skillLevel || "NA"
    };
}


const mapDispatchToProps = (dispatch: redux.Dispatch<AggregateDataStore>): ConnectedDispatch => ({
    setSkillCost: (skillCost: number, props: SkillElementProps & ConnectedState) => {
        console.log("SkillElement.setSkillCost value:" + skillCost + ", attribute:" + props.skillId);
        dispatch(setSkillCost(props.skillId, skillCost));
    },
    removeSkill: (props: SkillElementProps & ConnectedState) => {
        console.log("SkillElement.removeSkill:" + props.skillId);
        dispatch(removeSkill(props.skillId));
    }
});


class _SkillElement extends React.Component<ConnectedState & ConnectedDispatch & SkillElementProps, {}> {
    constructor(props: SkillElementProps & ConnectedState & ConnectedDispatch) {
        super(props);

    }

    _onSkillUp = (originalValue:number):void =>{
       var currentCostIndex =
           _.findIndex(SystemDataStore.skills.difficultyCostProgression,(v)=>originalValue===v);
       if(currentCostIndex+1<_.size(SystemDataStore.skills.difficultyCostProgression)) {
           this.props.setSkillCost(
               SystemDataStore.skills.difficultyCostProgression[currentCostIndex+1], this.props)
       }
    }

    _onSkillDown = (originalValue:number):void =>{
        var currentCostIndex =
            _.findIndex(SystemDataStore.skills.difficultyCostProgression,(v)=>originalValue===v);
        if(currentCostIndex>0) {
            this.props.setSkillCost(
                SystemDataStore.skills.difficultyCostProgression[currentCostIndex-1], this.props)
        }
    }

    _onRemoveSkill = ()=>{
        this.props.removeSkill(this.props);
    }

    render() {
        const {name, skillLevel, relativeLevel, cost,attributeName, difficulty} = this.props;

        return (
            <span className={styles.skillElement} draggable={true}>
                <label className={styles.deleteSkill} onClick={this._onRemoveSkill.bind(this)}>&#9746;</label>
                <Textfit  className={styles.skillName} mode="multi">
                    {name}
                </Textfit>

                <label className={styles.skillAttribute}>
                    {attributeName}/{difficulty}

                </label>
                <label className={styles.relativeLevelBox}>{relativeLevel}</label>
                <label className={styles.skillLevel}>
                    {skillLevel}
                </label>
                <label className={styles.skillsCost +  " " + styles.squareBrackets}>
                    <InputSpinner value={cost}
                                  className={styles.skillsInputSpinner }
                                  clickUpCall={this._onSkillUp.bind(this)}
                                  clickDownCall={this._onSkillDown.bind(this)}/>
                </label>

            </span>);

    }
}


export const SkillElement: React.ComponentClass<SkillElementProps> =
    connect(mapStateToProps, mapDispatchToProps)(_SkillElement);