package com.guienterprises.nasa_web_api_spr.repository;

import com.guienterprises.nasa_web_api_spr.domain.entity.Apod;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ApodRepository extends JpaRepository<Apod, Integer> {
}
