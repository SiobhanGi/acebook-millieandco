package com.millieandco.acebook;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface UserRepository extends CrudRepository<User, Long> {
    List<User> findAll();

    User save(User user);

    User findByEmail(String email);
}
