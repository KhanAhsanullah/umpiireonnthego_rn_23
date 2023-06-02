import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { COLORS, FONTS } from '../../constants';

export const MyCalender = (props: any) => {
    
    const [selected, setSelected]: any = useState({});
    const {
        mode="multi",
        minDate = new Date( moment().add(1, 'day').format() ).toISOString(),
        onSelect = () => {}
    } = props;

    useEffect(() => {
        onSelect( Object.keys(selected) );
    }, [selected] )

    return (
        <View style={styles.container}>
            <Calendar
                minDate={ minDate }
                theme={{
                    backgroundColor: '#ffffff',
                    calendarBackground: COLORS.secondaryLight,
                    textSectionTitleColor: '#fff',
                    textSectionTitleDisabledColor: '#fff',
                    selectedDayBackgroundColor: '#fff',
                    selectedDayTextColor: '#000',
                    todayTextColor: '#000',
                    dayTextColor: '#fff',
                    textDisabledColor: '#d7d7d7',
                    arrowColor: '#fff',
                    disabledArrowColor: '#d7d7d7',
                    monthTextColor: '#fff',
                    indicatorColor: '#fff',
                    textDayFontFamily: FONTS.PoppinsRegular,
                    textMonthFontFamily: FONTS.PoppinsBold,
                    textDayHeaderFontFamily: FONTS.PoppinsSemiBold,
                    textDayFontWeight: '300',
                    textMonthFontWeight: '600',
                    textDayHeaderFontWeight: '500',
                    textDayFontSize: 14,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 12
                }}
                onDayPress={day => {

                    if( mode == 'multi' ){
                        const selectedDate = selected;
                        if( selectedDate[ day.dateString ] ){
                            delete( selectedDate[ day.dateString ] );
                            setSelected({...selectedDate});
                        }else{
                            setSelected({ ...selectedDate, [day.dateString]: { 
                                selected: true, 
                                selectedColor: '#fff'
                            }});
                        }
                    }else{
                        setSelected({ [day.dateString]: { 
                            selected: true, 
                            selectedColor: '#fff'
                        }});
                    }

                }}
                markingType={'custom'}
                markedDates={ selected }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 340,
        backgroundColor: COLORS.secondaryLight,
    },
});