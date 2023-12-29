import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { RecipeType } from '../Screens/Home/type';

const SLIDER_WIDTH = Dimensions.get('window').width
const ITEM_WIDTH = Dimensions.get('window').width

// Define the component props
interface CarouselProps {
  data: any[];
  renderItem: (item: any) => React.ReactNode;
}

export const CarouselCards: React.FC<CarouselProps> = ({ data, renderItem  }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderCarouselItem  = ({ item }: { item: RecipeType }) => (
      <View className='mx-3'>
          {renderItem(item)}
      </View>
  );

  return (
    <View>
      <Carousel
        vertical={false}
        data={data}
        renderItem={renderCarouselItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
    </View>
  );
};

