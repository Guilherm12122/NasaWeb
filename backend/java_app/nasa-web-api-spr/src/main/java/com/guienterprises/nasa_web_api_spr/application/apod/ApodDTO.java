package com.guienterprises.nasa_web_api_spr.application.apod;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class ApodDTO {
    private String date;
    private String explanation;
    private String title;
    private String url;
}