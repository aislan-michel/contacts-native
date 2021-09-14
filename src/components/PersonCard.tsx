import {StyleSheet, Text, TouchableOpacity} from "react-native";
import React from "react";
import {IPersonCardProps} from "../interfaces/IPersonCardProps";

export function PersonCard({name, email, telephone, ...rest}: IPersonCardProps) {
    return (
        <TouchableOpacity style={styles.buttonPerson} {...rest}>
            <Text style={[styles.textPerson, {fontSize: 22}]}>
                Name: {name}
            </Text>
            <Text style={[styles.textPerson, {fontSize: 18}]}>
                E-mail: {email}
            </Text>
            <Text style={[styles.textPerson, {fontSize: 16}]}>
                Telephone: {telephone}
            </Text>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    buttonPerson: {
        backgroundColor: '#1f1e25',
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        marginTop: 15
    },
    textPerson: {
        color: '#fff',
        fontWeight: 'bold'
    }
})