import React, { useRef } from "react"
import { View, StyleSheet } from "react-native"


interface GridViewProps<T> {
    data: T[];
    renderItem: (item: T) => JSX.Element;
    cols?: number
}

export const GridView = <T extends any>(props: GridViewProps<T>) => {

    const {data, renderItem, cols = 2} = props

    const ref = useRef<any>()
    
    const rowCount = () => {
        const odds = data.length % cols;
        const row = (data.length - odds)/ cols;
        
        if (odds !== 0) {
            return row + 1
        }
        return row
    }

    return (
        <View style={styles.container} ref={ref} className='w-full h-full'>
            {
                data.map((item, index) => {
                    return (
                        <View key={index} style={{width: 100 / cols + '%', height: 100 / rowCount() + '%'}} >
                            <View className={`bg-[#323232] p-1 h-full`}
                                style={{borderRadius: 8}}
                            >
                                {renderItem(item)}
                            </View>
                        </ View>
                    )})
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})