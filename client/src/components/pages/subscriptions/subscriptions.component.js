import React, { useEffect } from 'react'
import MainLayout from '../../layout/main-layout.component'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { getAllSubscriptions } from '../../../redux/reducers/subscription/subscription.actions'
import { selectSubscriptions } from '../../../redux/reducers/subscription/subscription.selectors'

//Material
import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
})

const Subscriptions = ({ getAllSubscriptions, subscriptions }) => {
    const classes = useStyles()

    useEffect(()=>{
        getAllSubscriptions()
    }, [])

    return (
        <MainLayout>
            <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {/* <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                </TableRow>
                </TableHead> */}
                <TableBody>
                {!subscriptions.loading && subscriptions.items.map((row) => (
                    <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                        {row.user.name}
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.status}</TableCell>
                    <TableCell align="right">{row.start}</TableCell>
                    <TableCell align="right">{row.end}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
        </MainLayout>
    )
}

const mapStateToProps = createStructuredSelector({
    subscriptions: selectSubscriptions
})

export default connect(mapStateToProps, {getAllSubscriptions})(Subscriptions)