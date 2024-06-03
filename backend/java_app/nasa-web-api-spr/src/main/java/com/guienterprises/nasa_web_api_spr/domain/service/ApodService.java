package com.guienterprises.nasa_web_api_spr.domain.service;

import com.guienterprises.nasa_web_api_spr.domain.entity.Apod;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
public interface ApodService {
    List<Apod> searchApods();
}
