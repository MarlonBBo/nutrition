import { colors } from '@/constants/Colors';
import {  View, StyleSheet, Text, TouchableOpacity, FlatList, Modal } from 'react-native';
import { Controller } from 'react-hook-form';
import { SelectProps } from '@/interfaces/selectProps';
import{ Feather } from '@expo/vector-icons'
import { useState } from 'react';


export function Select(selectProps: SelectProps) {

    const [visible, setVisible] = useState(false)

 return (
    <View style={styles.container}>
        <Controller
        control={selectProps.control}
        name={selectProps.name}

        render={({ field: {onChange, onBlur, value} })=>(
          <>
          <TouchableOpacity style={styles.select} onPress={()=> setVisible(true)}>
                <Text>{value ? selectProps.options.find(options => options.value === value )?.label : selectProps.placeholder }</Text>
                <Feather name='arrow-down' size={16} color="#000"/>
                
          </TouchableOpacity>

          <Modal 
          visible={visible}
          animationType='fade'
          transparent={true}
          onRequestClose={()=>setVisible(false)}
          > 
            <TouchableOpacity 
            style={styles.modalContainer}
            activeOpacity={1}
            onPress={()=> setVisible(false)}
            >
                <TouchableOpacity style={styles.modalContent}activeOpacity={1}>
                    <FlatList
                    contentContainerStyle={{gap: 4}}
                    data={selectProps.options}
                    keyExtractor={(item)=> item.value.toString()}
                    renderItem={({item})=>(
                        <TouchableOpacity 
                        onPress={()=> {
                            setVisible(false)
                            onChange(item.value)
                        }}
                        style={styles.options}
                        >
                            <Text>{ item.label }</Text>
                        </TouchableOpacity>
                    )}
                    />
                </TouchableOpacity>        


            </TouchableOpacity>

          </Modal>
          </>
        )}
        />

        { selectProps.error && <Text style={styles.erroText}>{selectProps.error}</Text>}

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      margin: 16,

    },

    input: {
      height: 40,
      backgroundColor: colors.white,
      borderRadius: 5,
      paddingLeft: 12
    },

    erroText: {
      color: 'red',
      marginTop: 4,
    },

    select: {
        flexDirection: 'row',
        height: 44,
        backgroundColor: colors.white,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 4,
    },

    modalContainer: {
        backgroundColor: 'rgba(0,0,0, 0.5)',
        flex:1,
        justifyContent: 'center'
    },

    modalContent: {
        backgroundColor: colors.white,
        marginHorizontal: 10,
        borderRadius: 8,
        padding: 20
    },

    options: {
        paddingVertical: 14,
        backgroundColor: 'rgba(208,208,208, 0.40)',
        borderRadius: 4,
        paddingHorizontal: 8,
    }
})