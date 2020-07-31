import React, { useEffect } from 'react'
import { createStructuredSelector } from 'reselect'
import MainLayout from '../../layout/main-layout.component'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllProfiles, clearSingleProfile } from '../../../redux/reducers/profile/profile.actions'
import { selectAllStudents } from '../../../redux/reducers/profile/profile.selectors'
import Student from '../../student/student.component'

//Material
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => (
    {
        table: {
            minWidth: 650,
        },
        root: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        extendedIcon: {
            marginRight: theme.spacing(1),
        }
    }
))

const Students = ({ getAllProfiles, students, clearSingleProfile}) => {

    const classes = useStyles()

    useEffect(()=>{
        clearSingleProfile()
        getAllProfiles()
    }, [])

    return(
        <MainLayout>
            <h2>Students</h2> 
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell align="left">Phone</TableCell>
                    <TableCell align="left">Emergency Contact</TableCell>
                    <TableCell align="left">Belt</TableCell>
                    <TableCell align="right">Actions</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {students.map((student, index) => (
                    <TableRow key={index}>
                    <TableCell component="th" scope="row">
                        {student.user.name}
                    </TableCell>
                    <TableCell align="left">{student.phone}</TableCell>
                    <TableCell align="left">{student.emergency}</TableCell>
                    <TableCell align="left">{student.belt}</TableCell>
                    <TableCell align="right">
                        <Link to={`profile/${index}`}>
                            <Button size="small" color="primary" variant="contained">
                                View Profile
                            </Button>
                        </Link>
                        <Link to={`profile/edit/${index}`}>
                            <Button size="small" color="primary" >
                                <EditIcon />
                            </Button>
                        </Link>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    students: selectAllStudents
})

export default connect(mapStateToProps, { getAllProfiles, clearSingleProfile })(Students)