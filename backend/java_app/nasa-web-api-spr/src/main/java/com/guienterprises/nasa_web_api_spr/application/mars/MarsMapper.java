package com.guienterprises.nasa_web_api_spr.application.mars;

import com.guienterprises.nasa_web_api_spr.domain.entity.Mars;
import org.springframework.stereotype.Component;

@Component
public class MarsMapper {
    public MarsDTO marsDTO(Mars mars){
        return MarsDTO.builder()
                .rover(mars.getRover())
                .img_src(mars.getImg_src())
                .earth_date(mars.getEarth_date())
                .build();
    }
}
