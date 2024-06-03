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
public class Apod {

    @Id
    private int id;

    @Column
    private String date;

    @Column
    private String explanation;

    @Column
    private String title;

    @Column
    private String url;
}
