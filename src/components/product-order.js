import React, { Component } from "react";
import { View, Text } from "react-native";
import { Avatar, Rating } from "react-native-elements";

class ProductOrder extends Component {
  render() {
    const { product } = this.props;
    return (
      <View style={{ display: "flex", flexDirection: "row", marginTop: 10 }}>
        <View>
          <Avatar source={{ uri: product.avatar_url }} large />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}> {product.name} </Text>
          <View style={{ flexDirection: "row" }}>
            <Text> Cung cấp bởi: </Text>
            <Text style={{ color: "green" }}>{product.provider}</Text>
          </View>
          <Text style={{ color: "red" }}> {product.total} vnđ</Text>
          {product.discount != 0 && (
            <Text style={{ textDecorationLine: "line-through" }}>
              {" "}
              {product.total * product.discount} vnđ
            </Text>
          )}
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginTop: 5 }}>
              <Rating imageSize={10} startingValue={product.rating} readonly />
            </View>
            <Text style={{ marginLeft: 15 }}>({product.comment} nhận xét)</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default ProductOrder;
