package com.guienterprises.nasa_web_api_spr.application.mars;

import jakarta.persistence.Column;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class MarsDTO {
    private String earth_date;
    private String img_src;
    private String rover;
}
