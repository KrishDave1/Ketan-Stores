package com.example.ketanStores.dto;

import java.sql.Blob;

public class Cotton_dto extends Kurta_dto{
    public Cotton_dto(String Type_name, int price, int size, int quantity, boolean available, Blob image) {
        super(Type_name, price, size, quantity, available, image);
    }
    public int getprice(){
        return super.price;
    }
    public int getsize(){
        return size;
    }
    public int getquantity(){
        return quantity;
    }
    public boolean getavailable(){
        return available;
    }
    public Blob getimage(){
        return image;
    }
}