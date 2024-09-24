import { Header } from '@/components/header/header';
import { Input } from '@/components/input';
import { colors } from '@/constants/Colors';
import { Text, View, StyleSheet, ScrollView, Pressable } from 'react-native';
import{ Select } from '../../components/input/select'
import { string, z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { router } from 'expo-router';
import { useDataStore } from '@/store/data';

const schema = z.object({
    gender: z.string().min(1, { message: "Genero obrigatório" }),
    level: z.string().min(1, { message: "Nivel obrigatório" }),
    objective: z.string().min(1, { message: "objetivo obrigatório" })
})

type FormData = z.infer<typeof schema>

export default function Create() {

    const { control, handleSubmit, formState: { errors, isValid } } = useForm<FormData>({
        resolver: zodResolver(schema)
    })

    const setPageTwo = useDataStore( state => state.setPageTwo)

    const options = [
        {label: "Masculino", value: "masculino"},
        {label: "Feminino", value: "feminino"}
    ]

    const levelOptions = [
        { label: 'Sedentário (pouco ou nenhuma atividade física)', value: 'Sedentário' },
        { label: 'Levemente ativo (exercícios 1 a 3 vezes na semana)', value: 'Levemente ativo (exercícios 1 a 3 vezes na semana)' },
        { label: 'Moderadamente ativo (exercícios 3 a 5 vezes na semana)', value: 'Moderadamente ativo (exercícios 3 a 5 vezes na semana)' },
        { label: 'Altamente ativo (exercícios 5 a 7 dia por semana)', value: 'Altamente ativo (exercícios 5 a 7 dia por semana)' },
      ]

      const objectiveOptions = [
        { label: 'Emagrecer', value: 'emagrecer' },
        { label: 'Hipertrofia', value: 'Hipertrofia' },
        { label: 'Hipertrofia + Definição', value: 'Hipertrofia e Definição' },
        { label: 'Definição', value: 'Definição' },
      ]

        const handleCreate = (data: FormData) => {
            setPageTwo({
                gender: data.gender,
                level: data.level,
                objective: data.objective,
            })
            router.push('/nutrition')
        }

 return (
    <View style={styles.container}>
        <Header
            step='Passo 2'
            title='Finalizando'
        />
        <ScrollView style={styles.content}>

            <Text style={styles.label}>Sexo:</Text>
            <Select
                name='gender'
                control={control}
                placeholder='Selecione genero'
                error={errors.gender?.message}
                options={options}
            />

            <Text style={styles.label}>Nivel de atividade física:</Text>
            <Select
                name='level'
                control={control}
                placeholder='Selecione seu nivel de atividades física'
                error={errors.level?.message}
                options={levelOptions}
            />  

            <Text style={styles.label}>Objetivo :</Text>
            <Select
                name='objective'
                control={control}
                placeholder='Selecione seu objetivo'
                error={errors.objective?.message}
                options={objectiveOptions}
            />  

            <Pressable style={styles.btn} onPress={handleSubmit(handleCreate)}>
                <Text style={styles.btnText}>Avançar</Text>
            </Pressable>

        </ScrollView>
    </View>
  );
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