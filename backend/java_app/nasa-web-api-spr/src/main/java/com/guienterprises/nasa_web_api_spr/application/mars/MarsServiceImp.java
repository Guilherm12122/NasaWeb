package com.guienterprises.nasa_web_api_spr.application.mars;

import com.guienterprises.nasa_web_api_spr.domain.entity.Mars;
import com.guienterprises.nasa_web_api_spr.domain.service.MarsService;
import com.guienterprises.nasa_web_api_spr.repository.MarsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MarsServiceImp implements MarsService {

    private final MarsRepository marsRepository;

    @Override
    public List<Mars> searchMars() {
        return marsRepository.findAll();
    }
}
