package com.guienterprises.nasa_web_api_spr.application.apod;

import com.guienterprises.nasa_web_api_spr.domain.entity.Apod;
import com.guienterprises.nasa_web_api_spr.domain.service.ApodService;
import com.guienterprises.nasa_web_api_spr.repository.ApodRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor
public class ApodServiceImp implements ApodService {

    private final ApodRepository apodRepository;

    @Override
    public List<Apod> searchApods() {
        return apodRepository.findAll();
    }
}
