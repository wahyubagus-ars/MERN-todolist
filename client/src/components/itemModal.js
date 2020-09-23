import React, { Component } from 'react'
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap'
import { connect } from 'react-redux'
import { addItem } from '../actions/itemAction'

class ItemModal extends Component {
    state = {
        mdoal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        const newItem = {
            name: this.state.name
        }

        this.props.addItem(newItem)

        this.toggle()
    }

    render(){
        return(
            <div>
                <Button color="dark" style={{marginBottom: '2rem'}} onClick={this.toggle}>Add item</Button>
                <Modal
                isOpen={this.state.modal}
                toggle={this.toggle}
                >
                 <ModalHeader toggle={this.toggle}>
                    Add to shopping list
                 </ModalHeader>
                 <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                      <FormGroup>
                        <Label for="item">Item</Label>
                        <Input 
                            type="text"
                            name="name"
                            id="item"
                            placeholder="...."
                            onChange={this.onChange}
                        />
                        <Button color="dark" type="submit" style={{marginTop: '2rem'}}>Add Item</Button>
                      </FormGroup>
                    </Form>
                 </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default connect(null, {addItem})(ItemModal)