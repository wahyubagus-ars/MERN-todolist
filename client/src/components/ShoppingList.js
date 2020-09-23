import React, {Component} from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup} from 'react-transition-group'
import { connect } from 'react-redux'
import { getItem , deleteItem } from '../actions/itemAction'
import PropType from 'prop-types'


class ShoppingList extends Component {

    componentDidMount(){
        this.props.getItem()
    }

    onDeleteClick = (id) => {
        this.props.deleteItem(id)
    }

    render(){
        const{ items } = this.props.item
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {items.map(({ _id, name }) => {
                            return(
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <div className="list-items">
                                    <Button className="remove-btn"
                                            color="danger" size="sm"
                                             onClick={this.onDeleteClick.bind(this, _id)}>
                                        &times;
                                    </Button>
                                    {name}
                                    </div>
                                </ListGroupItem>
                            </CSSTransition>
                            )
                        })}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

ShoppingList.propType = {
    getItem: PropType.func.isRequired,
    item: PropType.object.isRequired
}

const mapStateToProps = (state) => ({
    item: state.item
})
export default connect(mapStateToProps, {getItem, deleteItem} )(ShoppingList)