import React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import { COLORS } from '../../constants';

export const ResultIcon = (props: any) => {

  const {
    color = '#999b9f',
  } = props;

  return (
    <Svg
      width={20.778}
      height={22}
      viewBox="0 0 20.778 22"
    >
      <G fill={color}>
        <Path d="M3.721 4.6a.609.609 0 01.172-.425A.578.578 0 014.306 4h9.737a.578.578 0 01.414.176.612.612 0 010 .849.578.578 0 01-.414.176H4.306a.578.578 0 01-.414-.176.609.609 0 01-.171-.425zm.586 4.123h9.737a.578.578 0 00.414-.176.612.612 0 000-.849.578.578 0 00-.414-.176H4.306a.578.578 0 00-.414.176.612.612 0 000 .849.578.578 0 00.414.18zm0 3.522h9.737a.578.578 0 00.414-.176.612.612 0 000-.849.578.578 0 00-.414-.176H4.306a.578.578 0 00-.414.176.612.612 0 000 .849.578.578 0 00.414.179zm7.009 2.32h-7.01a.578.578 0 00-.414.176.612.612 0 000 .849.578.578 0 00.414.176h7.009a.578.578 0 00.414-.176.612.612 0 000-.849.578.578 0 00-.414-.172zm9.463 3.047a4.454 4.454 0 01-.887 2.677 4.266 4.266 0 01-2.3 1.563 4.172 4.172 0 01-2.749-.2 4.31 4.31 0 01-2.057-1.882H3.319a3.281 3.281 0 01-2.345-1A3.452 3.452 0 010 16.369V3.4A3.452 3.452 0 01.973 1a3.281 3.281 0 012.346-1h11.712a3.281 3.281 0 012.345 1 3.452 3.452 0 01.974 2.4v10.269a4.313 4.313 0 011.769 1.615 4.468 4.468 0 01.659 2.333zm-8.443.956a4.466 4.466 0 01.038-2.118 4.389 4.389 0 011.006-1.85 4.239 4.239 0 011.739-1.144 4.148 4.148 0 012.059-.167V3.4a2.234 2.234 0 00-.63-1.556 2.123 2.123 0 00-1.517-.644H3.319a2.123 2.123 0 00-1.519.647A2.234 2.234 0 001.171 3.4v12.969a2.234 2.234 0 00.63 1.557 2.123 2.123 0 001.518.646zm7.272-.956a3.241 3.241 0 00-.523-1.768 3.121 3.121 0 00-1.393-1.172 3.031 3.031 0 00-1.793-.181 3.08 3.08 0 00-1.589.871A3.209 3.209 0 0013.46 17a3.258 3.258 0 00.177 1.839 3.167 3.167 0 001.143 1.428 3.042 3.042 0 003.917-.4 3.228 3.228 0 00.91-2.249zm-1.612-.6h-.906v-1.154a.609.609 0 00-.172-.425.575.575 0 00-.828 0 .609.609 0 00-.172.425v1.758a.609.609 0 00.172.425.578.578 0 00.414.176h1.491a.578.578 0 00.414-.176.612.612 0 000-.849.578.578 0 00-.414-.176z"
        />
        <Path d="M3.319 0H15.03c.88.001 1.724.36 2.346.998.622.638.972 1.503.973 2.406v10.265c.726.356 1.339.916 1.768 1.614.43.699.659 1.507.66 2.333 0 .968-.312 1.91-.888 2.676a4.266 4.266 0 01-2.296 1.564 4.172 4.172 0 01-2.75-.201 4.31 4.31 0 01-2.057-1.882H3.319a3.281 3.281 0 01-2.346-.998A3.452 3.452 0 010 16.369V3.404A3.452 3.452 0 01.973.998 3.281 3.281 0 013.32 0zm13.86 13.293v-9.89c-.001-.583-.228-1.143-.63-1.556a2.123 2.123 0 00-1.518-.646H3.32c-.57.001-1.115.233-1.518.646a2.234 2.234 0 00-.63 1.557v12.965c0 .584.227 1.144.63 1.557.403.413.948.645 1.518.646h9.016a4.466 4.466 0 01.038-2.119 4.39 4.39 0 011.007-1.85 4.239 4.239 0 011.74-1.143 4.148 4.148 0 012.059-.167zm-.675 7.506a3.068 3.068 0 002.193-.934 3.24 3.24 0 00.387-4.017 3.121 3.121 0 00-1.393-1.172 3.031 3.031 0 00-1.793-.181 3.08 3.08 0 00-1.589.87 3.209 3.209 0 00-.849 1.63 3.258 3.258 0 00.177 1.84 3.167 3.167 0 001.143 1.427c.51.35 1.11.537 1.724.537zM4.306 4.003h9.737c.156 0 .305.063.414.176a.609.609 0 010 .85.578.578 0 01-.414.175H4.306a.578.578 0 01-.414-.176.609.609 0 010-.849.578.578 0 01.414-.176zm0 3.522h9.737c.156 0 .305.064.414.176a.609.609 0 010 .85.578.578 0 01-.414.176H4.306a.578.578 0 01-.414-.176.609.609 0 010-.85.578.578 0 01.414-.176zm0 3.522h9.737c.156 0 .305.063.414.176a.609.609 0 010 .85.578.578 0 01-.414.175H4.306a.578.578 0 01-.414-.176.609.609 0 010-.85.578.578 0 01.414-.175zm0 3.522h7.009c.155 0 .304.063.414.176a.609.609 0 010 .849.578.578 0 01-.414.176H4.306a.578.578 0 01-.414-.176.609.609 0 010-.85.578.578 0 01.414-.175zm12.198.689c.155 0 .304.063.414.175.11.113.171.266.171.425v1.157h.906c.155 0 .304.064.414.176a.609.609 0 010 .85.578.578 0 01-.414.176h-1.491a.578.578 0 01-.414-.176.609.609 0 01-.172-.425v-1.758c0-.16.062-.312.172-.425a.578.578 0 01.414-.175z"
        />
      </G>
    </Svg>
  );
};