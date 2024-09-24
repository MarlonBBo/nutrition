
import { Header } from '@/components/header/header';
import { Input } from '@/components/input';
import { colors } from '@/constants/Colors';
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form';
import { router } from 'expo-router';
import { useDataStore } from '@/store/data';


const schema = z.object({
    name: z.string().min(1, { message: 'Nome obrigatório' }),
    age: z.string().min(1, { message: 'Idade obrigatória' }),
    height: z.string().min(1, { message: 'Altura obrigatória' }),
    weight: z.string().min(1, { message: 'Peso obrigatório' }) 
})

type FormData = z.infer<typeof schema>

export default function Step(){

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const setPageOne = useDataStore( state => state.setPageOne)

    const handleCreate = (data: FormData) => {
        setPageOne({
            name: data.name,
            age: data.age,
            height: data.height,
            weight: data.weight
        })
        router.push('/create')
    }

    return(
        <View style={styles.container}>
           <Header
           step='Passo 1'
           title='Preencha o formulário'
           />

        <ScrollView style={styles.content}>
            <Text style={styles.label}>Nome: </Text>
            <Input
                name='name'
                control={control}
                placeholder='Digite seu nome'
                error={errors.name?.message}
                keyboardType='default'
            />

            <Text style={styles.label}>Idade: </Text>
            <Input
                name='age'
                control={control}
                placeholder='Digite sua idade. Ex: 20'
                error={errors.age?.message}
                keyboardType='numeric'
            />

            <Text style={styles.label}>Altura: </Text>
            <Input
                name='height'
                control={control}
                placeholder='Digite sua altura. Ex: 1.90'
                error={errors.height?.message}
                keyboardType='numeric'
            />

            <Text style={styles.label}>Peso: </Text>
            <Input
                name='weight'
                control={control}
                placeholder='Digite seu peso. Ex: 70'
                error={errors.weight?.message}
                keyboardType='numeric'
            />

            <Pressable style={styles.btn} onPress={handleSubmit(handleCreate)}>
                <Text style={styles.btnText}>Avançar</Text>
            </Pressable>

        </ScrollView>


        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        flex: 1,
    },

    content: {
        paddingLeft: 16,
        paddingRight: 16,
    },

    label: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 16,
        marginTop: 12,
    },

    btn: {
        width: '100%',
        height: 40,
        borderRadius: 4,
        borderColor: colors.white,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 35
      },
    
      btnText: {
        color: colors.white,
        fontSize: 16,
        fontWeight: 'bold',
      }
})