package com.guienterprises.nasa_web_api_spr.application.apod;

import com.guienterprises.nasa_web_api_spr.domain.entity.Apod;
import org.springframework.stereotype.Component;

@Component
public class ApodMapper {
    public ApodDTO apodDTO(Apod apod){
        return ApodDTO.builder()
                .url(apod.getUrl())
                .explanation(apod.getExplanation())
                .title(apod.getTitle())
                .date(apod.getDate())
                .build();
    }
}
