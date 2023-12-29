import React from "react";
import { Image as DefaultImage, ImageProps as DefaultImageProps, View} from "react-native";
import tailwind from "twrnc";

  interface ImageProps extends DefaultImageProps {
    variant?: "default" | "rounded" | "circle";
    size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
    rounded?: 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-full'
  }

export const ImageComponent = ({variant = "default",size = "md", ...props}: ImageProps) => {
    const sizes = {
      xxs: tailwind`w-6 h-6`,
      xs: tailwind`w-9 h-9`,
      sm: tailwind`w-20 h-20`,
      md: tailwind`w-32 h-32`,
      lg: tailwind`w-48 h-48`,
      xl: tailwind`w-64 h-64`,
    };

    const variants = {
      default: tailwind``,
      rounded: tailwind`rounded-lg`,
      circle: tailwind`rounded-full`,
    };

    return (
        <DefaultImage {...props} style={[sizes[size], variants[variant]]} />
    )
}