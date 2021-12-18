import { DataGrid } from '@mui/x-data-grid';

function CarsList(props) {
    const columns = [
        {  
            field: 'Name', 
            headerName: 'Name', 
            flex: 1,
        },
        {
            field: 'Miles_per_Gallon',
            headerName: 'Miles_per_Gallon',
            type: 'number',
            flex: 1,
        },
        {
            field: 'Cylinders',
            headerName: 'Cylinders',
            type: 'number',
            flex: 1,
        },
        {
            field: 'Displacement',
            headerName: 'Displacement',
            type: 'number',
            flex: 1,
        },
        {
            field: 'Horsepower',
            headerName: 'Horsepower',
            type: 'number',
            flex: 1,
        },
        {
            field: 'Weight_in_lbs',
            headerName: 'Weight_in_lbs',
            type: 'number',
            flex: 1,
        },
        {
            field: 'Acceleration',
            headerName: 'Acceleration',
            type: 'number',
            flex: 1,
        },
        {
            field: 'Year',
            headerName: 'Year',
            flex: 1,
        },
        {
            field: 'Origin',
            headerName: 'Origin',
            flex: 1,
        },
    ];
    return (
        <div className="w-100 h-100 d-flex flex-column">
            <DataGrid
                rows={props.cars}
                columns={columns}
            />
        </div>
    )
}

export default CarsList;