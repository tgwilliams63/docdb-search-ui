import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Filter from "./Filter";

const columns = [
    {field: "id", headerName: "ID", width: 260},
    {field: "FieldName", headerName: "Field Name", width: 260},
    {field: "Schema", headerName: "Schema", width: 260},
    {field: "Type", headerName: "Type", width: 260}
]

class GetFields extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rows: []
        }
    }

    componentDidMount() {
        const apiUrl = 'http://localhost:8080/fields';
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => data.map((field) => {
                let row = {}
                row["id"] = field["ID"]
                row["FieldName"] = field["FieldName"]
                row["Schema"] = field["Schema"]
                row["Type"] = field["Type"]
                return row
            }))
            .then((rows) => this.setState({rows: rows}));
    }

    requery = (filters) => {
        // let filterList = []
        let url = new URL('http://localhost:8080/fields')
        let filterList = filters.map((filter) => {
            let strings = filter.split(":",2)
            let subfilter = []
            subfilter.push(strings[0])
            subfilter.push(strings[1])
            return subfilter
            // filterList.push(subfilter)
        })
        url.search = new URLSearchParams(filterList).toString()
        fetch(url)
            .then((response) => response.json())
            .then((data) => data.map((field) => {
                let row = {}
                row["id"] = field["ID"]
                row["FieldName"] = field["FieldName"]
                row["Schema"] = field["Schema"]
                row["Type"] = field["Type"]
                return row
            }))
            .then((rows) => this.setState({rows: rows}));
    }

    render() {
        return (
            <div style={{ height: 400, width: '100%', paddingTop: 20}}>
                <Filter filterHandler={this.requery}/>
                {this.state.rows.length > 0
                   ? <DataGrid rows={this.state.rows} columns={columns} pageSize={5}/>
                    : <div>No Data Returned</div>
                }
            </div>
        )
    }
}
export default GetFields;