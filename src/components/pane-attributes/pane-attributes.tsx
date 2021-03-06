import * as React from "react";
import * as redux from "redux";
import { connect } from "react-redux";
import { AttributeElement} from "../element-attribute/attribute-element";
import {AggregateDataStore} from "../../datastore/aggregate-datastore";
import * as styles from "./pane-attributes.css";
export interface AttributePaneProps {}

interface ConnectedState {}

interface ConnectedDispatch {}

const mapStateToPropsAttributePane = (state: AggregateDataStore, ownProps: AttributePaneProps): ConnectedState => ({

})

const mapDispatchToPropsAttributePane = (dispatch: redux.Dispatch<AggregateDataStore>): ConnectedDispatch => ({

})



class _AttributesPane extends React.Component<{} , {}> {



    render () {

        return <fieldset className={styles.attributesPane}>
            <legend>Attributes</legend>
            <div className={styles.Attributes}>
                <AttributeElement attributeId="st"/>
                <AttributeElement attributeId="dx"/>
                <AttributeElement attributeId="iq"/>
                <AttributeElement attributeId="ht"/>
            </div>
            <div className={styles.Attributes}>
                <AttributeElement attributeId="hp"/>
                <AttributeElement attributeId="will"/>
                <AttributeElement attributeId="per"/>
                <AttributeElement attributeId="fp"/>
            </div>
            <div className={styles.Attributes}>
                <AttributeElement attributeId="strike"/>
                <AttributeElement attributeId="speed"/>
                <AttributeElement attributeId="move"/>
            </div>
        </fieldset>
    }
}



export const AttributesPane: React.ComponentClass<AttributePaneProps> =
    connect(mapStateToPropsAttributePane, mapDispatchToPropsAttributePane)(_AttributesPane)