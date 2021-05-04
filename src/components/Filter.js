import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { green } from '@material-ui/core/colors';
import {IconButton} from "@material-ui/core";
import Chip from '@material-ui/core/Chip';

// const FilterFields = ["Field Name", "Type", "Schema", "Description"]

// class FilterChips extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             filters: props.filters
//         }
//     }
//
//     render() {
//         return
//     }
// }

class Filter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            type: "FieldName",
            text: "",
            filterEntry: "",
            filters: [],
            requeryHandler: props.filterHandler
        }
    }

    handleChange = (event) => {
        let filter = event.target.value + ":" + this.state.text
        this.setState({type: event.target.value});
        this.setState({filterEntry: filter})
    };

    handleTextChange = (event) => {
        let filter = this.state.type + ":" + event.target.value
        this.setState({text: event.target.value})
        this.setState({filterEntry: filter})
    }

    handleAddClick = (filter) => {
        let filters = this.state.filters
        filters.push(filter)
        this.setState({filters: filters})
        this.state.requeryHandler(filters)
    }

    handleDelete = (filter) => {
        let filters = this.state.filters
        console.log(filter)
        let index = filters.indexOf(filter);
        if (index !== -1) {
            filters.splice(index, 1);
        }
        this.setState({filters: filters})
        this.state.requeryHandler(filters)
    };

    FilterChips = (props) => {
        let filters = this.state.filters
        console.log(filters)
        const filterList = filters.map((filter) =>
            <Chip label={filter} color="primary" onDelete={() => {this.handleDelete(filter)}}/>
        )

        return (
            <div>{filterList}</div>
        )
    }

    render() {
        return (
            <div>
                <div>
                    <FormControl variant="outlined">
                        <InputLabel id="FilterFieldSelector">Filter</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.state.type}
                            onChange={this.handleChange}
                            label="FilterField"
                        >
                            <MenuItem value={"FieldName"}>Field Name</MenuItem>
                            <MenuItem value={"Schema"}>Schema</MenuItem>
                            <MenuItem value={"Type"}>Type</MenuItem>
                            <MenuItem value={"Description"}>Description</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField id="FilterText" label="Outlined" variant="outlined" onChange={this.handleTextChange}/>
                    <IconButton style={{color: "green"}} size="medium" aria-label="add" onClick={() => { this.handleAddClick(this.state.filterEntry) }}>
                        <AddBoxIcon fontSize={"large"}/>
                    </IconButton>
                    <this.FilterChips />
                </div>
            </div>
        )
    }
}

export default Filter