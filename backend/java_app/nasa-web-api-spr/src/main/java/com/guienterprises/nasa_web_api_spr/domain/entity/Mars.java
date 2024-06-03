package com.guienterprises.nasa_web_api_spr.domain.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

@Entity
@Table
@EntityListeners(AuditingEntityListener.class)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Mars {

    @Id
    private int id;

    @Column
    private String earth_date;

    @Column
    private String img_src;

    @Column
    private String rover;
}
