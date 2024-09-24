import { colors } from '@/constants/Colors';
import { TextInput, View, StyleSheet, Keyboard, Text } from 'react-native';
import { Controller } from 'react-hook-form';
import { InputProps } from '@/interfaces/inputProps';

export function Input(inputProps: InputProps) {
 return (
    <View style={styles.container}>
        <Controller
        control={inputProps.control}
        name={inputProps.name}
        rules={inputProps.rules}

        render={({ field: {onChange, onBlur, value} })=>(
          <TextInput
          style={styles.input}
          placeholder={inputProps.placeholder}
          onBlur={onBlur}
          value={value}
          onChangeText={onChange}
          keyboardType={inputProps.keyboardType}
          />
        )}
        />

        { inputProps.error && <Text style={styles.erroText}>{inputProps.error}</Text>}

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
    }
})